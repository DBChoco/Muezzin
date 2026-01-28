#!/usr/bin/env node

/**
 * Muezzin CLI Helper
 * -------------------
 * A full-featured command-line interface for Muezzin.
 *
 * Features:
 *   --json         Output prayer times in JSON
 *   --tomorrow     Show tomorrow's prayer times
 *   --week         Show a 7-day timetable
 *   --next         Show the next upcoming prayer
 *   --notify       Send a desktop notification
 *   --adhan        Play adhan audio (requires player)
 *   --config PATH  Use a custom config file
 *
 * Default config path (Flatpak):
 *   ~/.var/app/io.github.dbchoco.muezzin/config/muezzin/config.json
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  PrayerTimes,
  Coordinates,
  CalculationMethod,
  Madhab
} = require("adhan");

// -----------------------------
// CONFIG LOADING
// -----------------------------

const DEFAULT_CONFIG = path.join(
  process.env.HOME,
  ".var/app/io.github.dbchoco.muezzin/config/muezzin/config.json"
);

const args = process.argv.slice(2);

function showHelp() {
  console.log(`
Muezzin CLI — Command Line Prayer Time Helper
Usage:
  muezzin-cli [options]

Options:
  --help, -h        Show this help message
  --json            Output prayer times in JSON format
  --tomorrow        Show tomorrow's prayer times
  --week            Show a 7-day timetable
  --next            Show the next upcoming prayer
  --notify          Send a desktop notification
  --adhan           Play adhan audio (requires audio player)
  --config <path>   Use a custom config file instead of the default

Examples:
  muezzin-cli
  muezzin-cli --json
  muezzin-cli --tomorrow
  muezzin-cli --week
  muezzin-cli --next
  muezzin-cli --config ~/.config/muezzin/config.json
`);
}

if (args.includes("--help") || args.includes("-h")) {
  showHelp();
  process.exit(0);
}

function getArg(flag) {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : null;
}

const customConfig = getArg("--config");
const configPath = customConfig || DEFAULT_CONFIG;

if (!fs.existsSync(configPath)) {
  console.error("Config file not found:", configPath);
  process.exit(1);
}

const cfg = JSON.parse(fs.readFileSync(configPath, "utf8"));

// -----------------------------
// PRAYER TIME CALCULATION
// -----------------------------

function buildParams() {
  const method = CalculationMethod[cfg.calculationMethod]
    ? CalculationMethod[cfg.calculationMethod]()
    : CalculationMethod.MuslimWorldLeague();

  method.madhab = cfg.madhab === "Hanafi" ? Madhab.Hanafi : Madhab.Shafi;
  return method;
}

function computeTimes(date) {
  const coords = new Coordinates(cfg.latitude, cfg.longitude);
  const params = buildParams();
  return new PrayerTimes(coords, date, params);
}

function formatTime(date) {
  return date.toLocaleTimeString("en-US", { timeZone: cfg.timezone });
}

// -----------------------------
// OUTPUT MODES
// -----------------------------

function printTimes(date, times) {
  console.log(`Prayer Times for ${date.toDateString()} (${cfg.timezone})`);
  console.log("------------------------------------------------");

  for (const [name, value] of Object.entries(times)) {
    if (value instanceof Date) {
      console.log(name.padEnd(10) + ": " + formatTime(value));
    }
  }
}

function jsonTimes(date, times) {
  const out = {};
  for (const [name, value] of Object.entries(times)) {
    if (value instanceof Date) {
      out[name] = formatTime(value);
    }
  }
  console.log(JSON.stringify(out, null, 2));
}

function weeklyTimetable() {
  const today = new Date();
  console.log(`Weekly Prayer Timetable (${cfg.timezone})`);
  console.log("------------------------------------------------");

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const t = computeTimes(d);

    console.log(`\n${d.toDateString()}`);
    console.log("----------------------");

    for (const [name, value] of Object.entries(t)) {
      if (value instanceof Date) {
        console.log(name.padEnd(10) + ": " + formatTime(value));
      }
    }
  }
}

function nextPrayer() {
  const now = new Date();
  const times = computeTimes(now);

  const entries = Object.entries(times)
    .filter(([_, v]) => v instanceof Date)
    .sort((a, b) => a[1] - b[1]);

  for (const [name, time] of entries) {
    if (time > now) {
      console.log(`Next prayer is ${name} at ${formatTime(time)}`);
      return;
    }
  }

  console.log("All prayers for today have passed.");
}

// -----------------------------
// NOTIFICATIONS & ADHAN
// -----------------------------

function notify(title, message) {
  try {
    execSync(`notify-send "${title}" "${message}"`);
  } catch {
    console.error("notify-send not available.");
  }
}

function playAdhan() {
  const audioFile = cfg.adhanAudio || "/usr/share/sounds/freedesktop/stereo/alarm-clock-elapsed.oga";

  try {
    execSync(`paplay "${audioFile}"`);
  } catch {
    console.error("Unable to play adhan audio.");
  }
}

// -----------------------------
// MAIN LOGIC
// -----------------------------

const showJSON = args.includes("--json");
const showTomorrow = args.includes("--tomorrow");
const showWeek = args.includes("--week");
const showNext = args.includes("--next");
const doNotify = args.includes("--notify");
const doAdhan = args.includes("--adhan");

if (showWeek) {
  weeklyTimetable();
  process.exit(0);
}

if (showNext) {
  nextPrayer();
  process.exit(0);
}

const date = new Date();
if (showTomorrow) {
  date.setDate(date.getDate() + 1);
}

const times = computeTimes(date);

if (doNotify) {
  notify("Prayer Times", "Your prayer times are ready.");
}

if (doAdhan) {
  playAdhan();
}

if (showJSON) {
  jsonTimes(date, times);
} else {
  printTimes(date, times);
}
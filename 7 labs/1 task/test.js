// Lab_07/task1/test.js

import ConfigManager from "./singleton.js";

// --- Тест 1: getInstance() возвращает тот же экземпляр ---
const instance1 = ConfigManager.getInstance();
const instance2 = ConfigManager.getInstance();
console.assert(instance1 === instance2, "FAIL: Разные экземпляры!");
console.log("✅ Same instance:", instance1 === instance2); // true

// --- Тест 2: new тоже возвращает тот же экземпляр ---
const instance3 = new ConfigManager();
console.assert(instance1 === instance3, "FAIL: new создал новый экземпляр!");
console.log("✅ new returns same instance:", instance1 === instance3); // true

// --- Тест 3: конфигурация сохраняется между точками доступа ---
instance1.set("appName", "MyApp");
instance1.set("version", "1.0.0");
console.assert(instance2.get("appName") === "MyApp", "FAIL: Конфиг не синхронизирован!");
console.log("✅ From instance2:", instance2.get("appName")); // "MyApp"
console.log("✅ All config:", instance2.getAll());           // { appName: "MyApp", version: "1.0.0" }

// --- Тест модульного синглтона ---
import configModule from "./config.js";
configModule.set("theme", "dark");
console.log("✅ Module singleton:", configModule.get("theme")); // "dark"

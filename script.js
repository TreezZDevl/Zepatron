function toggleApp(appName) {
    const appWindow = document.getElementById(appName);
    if (appWindow.classList.contains('hidden')) {
        appWindow.classList.remove('hidden');
    } else {
        appWindow.classList.add('hidden');
    }
}

function closeApp(appName) {
    const appWindow = document.getElementById(appName);
    appWindow.classList.add('hidden');
}

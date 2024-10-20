document.getElementById('app1').addEventListener('click', () => {
    createAppWindow('アプリ1', 'これはアプリ1の内容です。');
});

document.getElementById('app2').addEventListener('click', () => {
    createAppWindow('アプリ2', 'これはアプリ2の内容です。');
});

function createAppWindow(title, content) {
    const workspace = document.getElementById('workspace');
    
    const appWindow = document.createElement('div');
    appWindow.className = 'app-window';
    appWindow.innerHTML = `
        <div class="app-header">${title} <button class="close-btn">×</button></div>
        <div class="app-content">${content}</div>
    `;
    
    workspace.appendChild(appWindow);

    const closeButton = appWindow.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        workspace.removeChild(appWindow);
    });
}

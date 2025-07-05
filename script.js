document.addEventListener('DOMContentLoaded', function() {
    const messageButton = document.getElementById('message-btn');
    const messageDiv = document.getElementById('message');
    
    const messages = [
        "'A única maneira de fazer um excelente trabalho é amar o que você faz.' - Steve Jobs",
        "Que seu dia seja repleto de descobertas e aprendizados!",
        "Continue sempre buscando conhecimento e crescimento pessoal!"
    ];
    
    let currentMessage = 0;
    let messageVisible = false;
    
    function toggleMessage() {
        if (!messageVisible) {
            messageDiv.innerHTML = messages[currentMessage];
            messageDiv.style.display = 'block';
            messageButton.textContent = 'Clique para nova mensagem!';
            messageVisible = true;
            currentMessage = (currentMessage + 1) % messages.length;
        } else {
            messageDiv.innerHTML = messages[currentMessage];
            currentMessage = (currentMessage + 1) % messages.length;
        }
    }
    
    messageButton.addEventListener('click', toggleMessage);
});

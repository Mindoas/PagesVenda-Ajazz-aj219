        let currentImageIndex = 0;
            const images = document.querySelectorAll('.product-image');

            function showImage(index) {
                images.forEach(image => {
                    image.style.display = 'none';
                });

                images[index].style.display = 'block';
            }

            function changeImage(direction) {
                currentImageIndex += direction;

                if (currentImageIndex >= images.length) {
                    currentImageIndex = 0;
                } else if (currentImageIndex < 0) {
                    currentImageIndex = images.length - 1;
                }

                showImage(currentImageIndex);
            }

            window.addEventListener('DOMContentLoaded', () => {
                showImage(currentImageIndex);
            });

            function copyCode() {
                var code = document.querySelector('.code');
                var textArea = document.createElement("textarea");
                textArea.value = code.textContent;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("Copy");
                textArea.remove();
                alert("Código copiado com sucesso!");
            }

            function sendWhatsAppMessage() {
                var message = "Olá, aqui está o comprovante do PIX da minha compra: "; // Mensagem que deseja enviar
                var phoneNumber = "5514999257269"; // Seu número de telefone
                var encodedMessage = encodeURIComponent(message);
                var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;
                window.open(whatsappURL, "_blank");
            }
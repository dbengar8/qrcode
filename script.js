document.getElementById('generateBtn').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    if (url) {
        var qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = "";
        var qrcode = new QRCode(qrcodeContainer, {
            text: url,
            width: 128,
            height: 128,
            correctLevel : QRCode.CorrectLevel.H
        });

        // Wait for the QR code to be generated
        setTimeout(function() {
            var canvas = qrcodeContainer.getElementsByTagName('canvas')[0];
            var downloadBtn = document.getElementById('downloadBtn');
            downloadBtn.href = canvas.toDataURL('image/png');
            downloadBtn.download = 'qrcode.png';
            downloadBtn.style.display = 'block';
        }, 50);
    }
});
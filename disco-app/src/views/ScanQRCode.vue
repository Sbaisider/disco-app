<template>
  <div class="scan-qrcode">
    <h2>Scannerizza QR Code</h2>
    <qrcode-scanner @scan="onScan" />
  </div>
</template>

<script>
import QRCodeScanner from 'vue-qrcode-reader';

export default {
  name: 'ScanQRCode',
  components: {
    QRCodeScanner,
  },
  methods: {
    async onScan(result) {
      try {
        const response = await axios.post('/api/scan', { qrCode: result });
        // Aggiorna la contabilità
      } catch (error) {
        console.error('QR Code scan failed', error);
      }
    },
  },
};
</script>

<style scoped>
/* Stili della schermata di scannerizzazione QR Code */
.scan-qrcode {
  text-align: center
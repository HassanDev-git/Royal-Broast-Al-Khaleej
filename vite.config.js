import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Permit ephemeral Cloudflare Quick Tunnel hostnames.
    allowedHosts: ['.trycloudflare.com'],
  },
});

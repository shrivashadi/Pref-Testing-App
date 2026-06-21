import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10, // Virtual Users
  duration: '30s', // Test kitni der chalega
};

export default function () {
  http.get('http://localhost:3000/');
  sleep(1);
}
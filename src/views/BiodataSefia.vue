<template>
    <div class="container">
      <h1>Biodata</h1>
      <img :src="foto" alt="Foto Sefia" class="foto" />
      <ul>
        <li><strong>Nama:</strong> Sefia Nasya Filani</li>
        <li><strong>NIM:</strong> 225150400111002</li>
      </ul>
    </div>
  </template>
  
  <script>
  import foto from '@/assets/foto.jpg'
  
  export default {
    data() {
      return {
        foto
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    padding: 40px;
  }
  .foto {
    width: 200px;
    border-radius: 30px;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    font-size: 18px;
    margin: 10px 0;
  }
  </style>
  
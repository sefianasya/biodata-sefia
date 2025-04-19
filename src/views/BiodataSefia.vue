<template>
  <div class="cv-container">
    <img :src="foto" alt="Foto Profil" class="profile-photo" />

    <h1 class="name">Sefia Nasya Filani</h1>
    <p class="contact">Malang, East Java | +62 813 6437 0453 | nasyasefia@gmail.com</p>
    <p class="linkedin">
      <a href="https://www.linkedin.com/in/sefianasya/" target="_blank">LinkedIn Profile</a>
    </p>

    <section class="section">
      <h2>Profil</h2>
      <p>
        Mahasiswa semester 6 Sistem Informasi Universitas Brawijaya yang memiliki ketertarikan pada Data Analysis, Business Intelligence,
        dan pengambilan keputusan berbasis data. Terampil dalam SQL, Google BigQuery, Tableau, dan Looker Studio untuk mengolah dan memvisualisasikan data.
      </p>
    </section>

    <section class="section">
      <h2>Pendidikan</h2>
      <p><strong>Universitas Brawijaya</strong> – Sistem Informasi (2022 – 2026)</p>
    </section>

    <section class="section">
      <h2>Pengalaman Proyek</h2>
      <ul>
        <li><strong>Big Data Analyst – Kimia Farma x Rakamin</strong><br />Mar – Apr 2025</li>
        <li><strong>Business Intelligence Analyst – Bank Muamalat x Rakamin</strong><br />Feb – Mar 2025</li>
        <li><strong>Community Treasurer – MMD FILKOM 2024</strong><br />Jul – Aug 2024</li>
      </ul>
    </section>

    <section class="section">
      <h2>Keterampilan</h2>
      <ul>
        <li>SQL, Google BigQuery, Tableau, Looker Studio</li>
        <li>Data Cleaning, ETL, KPI Dashboards</li>
        <li>Business Insights & Reporting</li>
      </ul>
    </section>

    <section class="section">
      <h2>Organisasi & Relawan</h2>
      <ul>
        <li>OPTIIK FILKOM – Staff Entrepreneurship (Feb–Des 2024)</li>
        <li>OYI 2024 – Staff Partnership (Ags–Sep 2024)</li>
        <li>IT FEST 2023 – Staff Sponsorship (Mei–Jul 2023)</li>
      </ul>
    </section>
  </div>
</template>

<script>
import foto from '@/assets/foto.jpg'

export default {
  name: 'BiodataSefia',
  data() {
    return {
      foto
    }
  }
}
</script>

<style scoped>
.cv-container {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  text-align: center;
}
.profile-photo {
  width: 160px;
  border-radius: 10%;
  margin-bottom: 15px;
}
.name {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
}
.contact, .linkedin {
  margin-bottom: 10px;
}
.section {
  text-align: left;
  margin-top: 30px;
}
.section h2 {
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
ul {
  padding-left: 20px;
}
</style>

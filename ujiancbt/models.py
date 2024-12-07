from django.db import models


class Siswa(models.Model):
    siswa = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    nomor_ujian = models.CharField(max_length=255)
    nama = models.CharField(max_length=255)
    jenis_kelamin = models.CharField(max_length=255)
    agama = models.CharField(max_length=255)
    jurusan = models.CharField(max_length=255)
    sesi_ujian = models.CharField(max_length=255)
    ruang_ujian = models.CharField(max_length=255)
    kode_level = models.CharField(max_length=255)
    kode_sekolah = models.CharField(max_length=255)
    nama_kelas = models.CharField(max_length=255)
    kode_kelas = models.CharField(max_length=255)
    foto = models.CharField(max_length=255)
    pilihan = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.siswa} {self.nama}"


class Admin(models.Model):
    admin = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    role = models.ForeignKey('Role', on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    status = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.admin}"


class Role(models.Model):
    role = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"{self.role}"

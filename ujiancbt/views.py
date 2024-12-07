from django.shortcuts import redirect, render
from .utils import nav_link, is_staff, is_not_staff, login_not_required
from django.http import HttpRequest, HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from .models import Admin
import openpyxl
from datetime import datetime
from django.views.decorators.cache import never_cache


@never_cache
@login_not_required('dashboard')
def user_login_view(request: HttpRequest):
    template_name = 'user/login.html'
    extra_context = {
        'title': 'AKM Sekolah'
    }
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        admin = authenticate(request, username=username, password=password)
        if admin is not None:
            login(request, admin)
            return redirect('admin_dashboard')
        else:
            extra_context.update({
                'error': 'Username atau Password Salah',
                'username': username,
                'password': password
            })  # type: ignore
            return render(request, template_name, extra_context)
    return render(request, template_name, extra_context)


@never_cache
def user_logout_view(request: HttpRequest):
    logout(request)
    return redirect('login')


@never_cache
@login_required(login_url='login')
@user_passes_test(is_not_staff, login_url='admin_login')
def user_dashboard_view(request: HttpRequest):
    template_name = 'user/dashboard.html'
    extra_context = {
        'title': 'Dashboard'
    }
    return render(request, template_name, extra_context)


@never_cache
@login_not_required('admin_dashboard')
def admin_login_view(request: HttpRequest):
    template_name = 'admins/login.html'
    extra_context = {
        'title': 'Admin Login',
    }
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        admin = authenticate(request, username=username, password=password)
        if admin is not None:
            login(request, admin)
            return redirect('admin_dashboard')
        else:
            extra_context.update({
                'error': 'Username atau Password Salah',
                'username': username,
                'password': password
            })  # type: ignore
            return render(request, template_name, extra_context)
    return render(request, template_name, extra_context)


@never_cache
def admin_logout_view(request: HttpRequest):
    logout(request)
    return redirect('admin_login')


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def admin_dashboard_view(request: HttpRequest):
    template_name = 'admins/dashboard.html'
    extra_context = {
        'title': 'Admin Dashboard',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Beranda', 'path': 'admin_dashboard'},
        ],
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def setting_server_view(request: HttpRequest):
    template_name = 'admins/setting_server.html'
    extra_context = {
        'title': 'Setting Server',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'System Server', 'path': 'admin_dashboard'},
            {'name': 'Setting Server', 'path': 'setting_server'}
        ]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def user_management_view(request: HttpRequest):
    template_name = 'admins/user_management.html'
    extra_context = {
        'title': 'User Management',
        'side_nav_link': nav_link(),
        'user_info': Admin.objects.select_related('admin').all(),
        'breadcrumbs': [
            {'name': 'System Server', 'path': 'admin_dashboard'},
            {'name': 'User Management', 'path': 'user_management'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def download_user_management_view(request):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Admin Data"  # type: ignore
    headers = ["ID", "Username", "Nama", "Alamat", "Level", "Status"]
    ws.append(headers)  # type: ignore
    admins = Admin.objects.select_related('admin').all()
    for index, admin in enumerate(admins, start=1):
        row = [
            index,
            admin.admin.username,
            admin.admin.first_name,
            admin.address,
            str(admin.role).upper(),
            "AKTIF" if admin.status else "NON AKTIF"
        ]
        ws.append(row)  # type: ignore
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"admin_data_{timestamp}.xlsx"
    content_type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    content_disposition = f'attachment; filename={filename}'
    response = HttpResponse(content_type=content_type)
    response['Content-Disposition'] = content_disposition
    wb.save(response)  # type: ignore
    return response


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def server_sekolah_view(request: HttpRequest):
    template_name = 'admins/server_sekolah.html'
    extra_context = {
        'title': 'Server Sekolah',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'System Server', 'path': 'admin_dashboard'},
            {'name': 'Server Sekolah', 'path': 'server_sekolah'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def backup_and_restore_view(request: HttpRequest):
    template_name = 'admins/backup_and_restore.html'
    extra_context = {
        'title': 'Server Sekolah',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Backup & Restore', 'path': 'backup_and_restore'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def list_question_bank_view(request: HttpRequest):
    template_name = 'admins/list_question_bank.html'
    extra_context = {
        'title': 'Daftar Bank Soal',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Bank Soal', 'path': 'admin_dashboard'},
            {'name': 'Daftar Bank Soal', 'path': 'list_question_bank'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def supporting_files_view(request: HttpRequest):
    template_name = 'admins/supporting_files.html'
    extra_context = {
        'title': 'File Pendukung',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Bank Soal', 'path': 'admin_dashboard'},
            {'name': 'File Pendukung', 'path': 'supporting_files'}],
        'link_items': [
            {'name': 'Gambar', 'path': 'supporting_files'},
            {'name': 'Audio', 'path': 'supporting_files'},
            {'name': 'Video', 'path': 'supporting_files'},
            {'name': 'PDF', 'path': 'supporting_files'},
        ]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def cbt_exam_result_view(request: HttpRequest):
    template_name = 'admins/cbt_exam_result.html'
    extra_context = {
        'title': 'Hasil Ujian CBT',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Print Out', 'path': 'admin_dashboard'},
            {'name': 'Hasil Ujian CBT', 'path': 'cbt_exam_result'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def list_of_attendees_view(request: HttpRequest):
    template_name = 'admins/list_of_attendees.html'
    extra_context = {
        'title': 'Daftar Hadir',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Print Out', 'path': 'admin_dashboard'},
            {'name': 'Daftar Hadir', 'path': 'list_of_attendees'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def class_list_view(request: HttpRequest):
    template_name = 'admins/class_list.html'
    extra_context = {
        'title': 'Daftar Kelas',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Administrative', 'path': 'admin_dashboard'},
            {'name': 'Daftar Kelas', 'path': 'class_list'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def list_of_subjects_view(request: HttpRequest):
    template_name = 'admins/list_of_subjects.html'
    extra_context = {
        'title': 'Daftar Mata Pelajaran',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Administrative', 'path': 'admin_dashboard'},
            {'name': 'Daftar Mata Pelajaran', 'path': 'list_of_subjects'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def exam_schedule_data_view(request: HttpRequest):
    template_name = 'admins/exam_schedule_data.html'
    extra_context = {
        'title': 'Data Jadwal Ujian',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Settings Test', 'path': 'admin_dashboard'},
            {'name': 'Data Jadwal Ujian', 'path': 'exam_schedule_data'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def list_of_exam_schedules_view(request: HttpRequest):
    template_name = 'admins/list_of_exam_schedules.html'
    extra_context = {
        'title': 'Daftar Jadwal Ujian',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Settings Test', 'path': 'admin_dashboard'},
            {'name': 'Daftar Jadwal Ujian', 'path': 'list_of_exam_schedules'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def test_group_view(request: HttpRequest):
    template_name = 'admins/test_group.html'
    extra_context = {
        'title': 'Kelompok Test',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Kelompok Test', 'path': 'test_group'}]
    }
    return render(request, template_name, extra_context)


@never_cache
@login_required(login_url='admin_login')
@user_passes_test(is_staff, login_url='login')
def list_of_participants_view(request: HttpRequest):
    template_name = 'admins/list_of_participants.html'
    extra_context = {
        'title': 'Daftar Peserta',
        'side_nav_link': nav_link(),
        'breadcrumbs': [
            {'name': 'Daftar Peserta', 'path': 'list_of_participants'}]
    }
    return render(request, template_name, extra_context)

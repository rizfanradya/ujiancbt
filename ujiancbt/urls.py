"""
URL configuration for ujiancbt project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class_based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.views.static import serve
from django.views.generic import RedirectView
from .views import (
    user_dashboard_view,
    user_login_view,
    admin_dashboard_view,
    admin_login_view,
    setting_server_view,
    admin_logout_view,
    user_logout_view,
    user_management_view,
    download_user_management_view,
    server_sekolah_view,
    backup_and_restore_view,
    list_question_bank_view,
    cbt_exam_result_view,
    list_of_attendees_view,
    test_group_view,
    list_of_participants_view,
    class_list_view,
    list_of_subjects_view,
    list_of_exam_schedules_view,
    exam_schedule_data_view,
    supporting_files_view
)

urlpatterns = [
    path('favicon.ico', RedirectView.as_view(
        url='/static/favicon.ico')),
    re_path('static/(?P<path>.*)', serve,
            {'document_root': settings.STATIC_ROOT}),
    path('django/admin/', admin.site.urls),
    path('', user_dashboard_view, name='dashboard'),
    path('login/', user_login_view, name='login'),
    path('logout/', user_logout_view, name='logout'),
    path('admin/', admin_dashboard_view, name='admin_dashboard'),
    path('admin/login/', admin_login_view, name='admin_login'),
    path('admin/logout/', admin_logout_view, name='admin_logout'),
    path('admin/system_server/setting_server/',
         setting_server_view, name='setting_server'),
    path('admin/system_server/user_management/',
         user_management_view, name='user_management'),
    path('admin/system_server/user_management/download',
         download_user_management_view, name='download_user_data'),
    path('admin/system_server/server_sekolah',
         server_sekolah_view, name='server_sekolah'),
    path('admin/backup_and_restore',
         backup_and_restore_view, name='backup_and_restore'),
    path('admin/question_bank/list_question_bank',
         list_question_bank_view, name='list_question_bank'),
    path('admin/question_bank/supporting_files',
         supporting_files_view, name='supporting_files'),
    path('admin/print_out/cbt_exam_result',
         cbt_exam_result_view, name='cbt_exam_result'),
    path('admin/print_out/list_of_attendees',
         list_of_attendees_view, name='list_of_attendees'),
    path('admin/test_group',
         test_group_view, name='test_group'),
    path('admin/list_of_participants',
         list_of_participants_view, name='list_of_participants'),
    path('admin/administrative/class_list',
         class_list_view, name='class_list'),
    path('admin/administrative/list_of_subjects',
         list_of_subjects_view, name='list_of_subjects'),
    path('admin/setting_test/list_of_exam_schedules',
         list_of_exam_schedules_view, name='list_of_exam_schedules'),
    path('admin/setting_test/exam_schedule_data',
         exam_schedule_data_view, name='exam_schedule_data'),
]

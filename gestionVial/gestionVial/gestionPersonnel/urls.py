from django.contrib import admin
from django.urls import path, include,re_path

from . import views


app_name = 'gestionPersonnel'

urlpatterns = [
    # path("repertoire_employes/",views.repertoire,name='repertoire'),
    re_path(r"^repertoire_employes/",views.EmployeListView.as_view(),name='list'),
    re_path(r"^details_employe/(?P<pk>[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12})",views.EmployeDetailView.as_view(),name='details'),
    # path("nouvel_employe/",views.nouvelEmp,name='nouvelEmp'),
    re_path(r'^nouvel_employe/$',views.EmployeCreateView.as_view(),name='create'),
    re_path(r'^mis_a_jour/$',views.EmployeListUpdate.as_view(),name='update'),
    re_path(r'^mis_a_jour/(?P<pk>[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12})',views.EmployeUpdateView.as_view(),name='updateEmp'),
]
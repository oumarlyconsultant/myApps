from django.contrib import admin
from django.urls import path, include,re_path

from . import views
from .views import EmployeListView, EmployeDetailView

app_name = 'gestionPersonnel'

urlpatterns = [
    # path("repertoire_employes/",views.repertoire,name='repertoire'),
    path("repertoire_employes/",EmployeListView.as_view(),name='employe-list'),
    re_path(r"repertoire_employes/(?P<pk>[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12})",EmployeDetailView.as_view(),name='employe-detail'),
    path("nouvel_employe/",views.nouvelEmp,name='nouvelEmp'),
]
from django.contrib import admin
from django.urls import path, include, re_path

from . import views

app_name = 'ventes'

urlpatterns = [
    re_path(r'^$',views.index.as_view(),name='index'),
    ##Clients
    re_path(r'^clients/$',views.clientsIndex.as_view(),name='clientsIndex'),
    re_path(r'^clients/details/(?P<pk>\d+)/$',views.clientsDetails.as_view(),name='clientsDetails'),
    re_path(r'^clients/ajouter/$',views.clientsAjouter.as_view(),name='clientsAjouter'),
    re_path(r'^clients/modifier/(?P<pk>\d+)/$',views.clientsModifier.as_view(),name='clientsModifier'),
    re_path(r'^clients/supprimer/(?P<pk>\d+)/$',views.clientsSupprimer.as_view(),name='clientsSupprimer'),
    re_path(r'^clients/repertoire/$',views.clientsRepertoire,name='clientsRepertoire'),
    ##Devis et factures
    re_path(r'^devis_et_factures/$',views.devisIndex.as_view(),name='devisIndex'),
]
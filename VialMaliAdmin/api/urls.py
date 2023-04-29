from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from . import views

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'pays', views.PaysView, 'pays')
router.register(r'ville', views.VilleView, 'ville')
router.register(r'departement', views.DepartementView, 'departement')
router.register(r'poste', views.PosteView, 'employe')
router.register(r'termesEmploi', views.TermesEmploiView, 'termesEmploi')
router.register(r'classe', views.ClasseView, 'classe')
router.register(r'couleur', views.CouleurView, 'couleur')
router.register(r'dimension', views.DimensionView, 'dimension')
router.register(r'article', views.ArticleView, 'article')
router.register(r'nomenclature', views.NomenclatureView, 'nomenclature')
router.register(r'client', views.ClientView, 'client')
router.register(r'devis', views.DevisView, 'devis')
router.register(r'devisArticle', views.DevisArticleView, 'devisArticle')

urlpatterns = [
    path('',include(router.urls)),
]
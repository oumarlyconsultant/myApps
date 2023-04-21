from django.urls import path,include,re_path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'proprietaire', views.ProprietaireView, 'proprietaire')

urlpatterns = [
    path('', include(router.urls)),
]
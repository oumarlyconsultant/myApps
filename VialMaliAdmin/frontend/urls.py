from django.urls import path,re_path
from .views import index

app_name = 'frontend'

urlpatterns = [
    re_path('', index),
    re_path(r'^ventes/', index),
    re_path(r'^operations/', index),
    re_path(r'^personnel/', index),

]
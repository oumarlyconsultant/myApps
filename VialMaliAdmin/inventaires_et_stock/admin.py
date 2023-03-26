from django.contrib import admin
from .models import Classe,Couleur,Dimension,Article

# Register your models here.
admin.site.register(Classe)
admin.site.register(Couleur)
admin.site.register(Dimension)
admin.site.register(Article)

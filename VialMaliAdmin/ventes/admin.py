from django.contrib import admin
from .models import Client, Devis, DevisArticle

# Register your models here.
admin.site.register(Client)
admin.site.register(Devis)
admin.site.register(DevisArticle)

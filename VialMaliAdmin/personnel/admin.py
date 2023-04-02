from django.contrib import admin
from .models import Departement, Employe, Poste

# Register your models here.
admin.site.register(Departement)
admin.site.register(Poste)
admin.site.register(Employe)
from django.contrib import admin
from .models import Departement, Poste, Employe, TermesEmploi

# Register your models here.
admin.site.register(Departement)
admin.site.register(Poste)
admin.site.register(Employe)
admin.site.register(TermesEmploi)
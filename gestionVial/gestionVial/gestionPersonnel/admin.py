from django.contrib import admin
from .models import Departement, Poste, EmployePoste, Employe, TermEmploi, TermPaie

# Register your models here.
admin.site.register(Departement)
admin.site.register(Poste)
admin.site.register(Employe)
admin.site.register(EmployePoste)
admin.site.register(TermEmploi)
admin.site.register(TermPaie)
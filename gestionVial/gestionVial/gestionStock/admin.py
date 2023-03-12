from django.contrib import admin
from .models import Pays, Ville, ClasseMat,Couleur,Fournisseur,Materiel,ClasseProd,Dimension,Produit, Nomenclature

# Register your models here.
admin.site.register(Pays)
admin.site.register(Ville)
admin.site.register(ClasseMat)
admin.site.register(Couleur)
admin.site.register(Fournisseur)
admin.site.register(Materiel)
admin.site.register(ClasseProd)
admin.site.register(Dimension)
admin.site.register(Produit)
admin.site.register(Nomenclature)
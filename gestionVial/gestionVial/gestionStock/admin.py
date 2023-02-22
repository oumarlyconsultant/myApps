from django.contrib import admin
from .models import ClasseMat,CategorieMat,Couleur,Ville,Fournisseur,Materiel,ClasseProd,CategorieProd,Dimension,Produit,Nomenclature

# Register your models here.
admin.site.register(ClasseMat)
admin.site.register(CategorieMat)
admin.site.register(Couleur)
admin.site.register(Ville)
admin.site.register(Fournisseur)
admin.site.register(Materiel)
admin.site.register(ClasseProd)
admin.site.register(CategorieProd)
admin.site.register(Dimension)
admin.site.register(Produit)
admin.site.register(Nomenclature)
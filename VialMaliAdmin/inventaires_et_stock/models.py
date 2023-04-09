from django.db import models
from django.db import models


class Classe(models.Model):
    classe = models.CharField(max_length=50,blank=False,null=False)
    indFabricationReq = models.BooleanField(blank=False,null=False,default=0)
    info = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.classe

class Couleur(models.Model):
    couleur = models.CharField(max_length=50,blank=False,null=False)
    code = models.CharField(max_length=10,blank=True,null=True)
    info = models.CharField(max_length=200,blank=True,null=True)   

    def __str__(self):
        return self.couleur

class Dimension(models.Model):
    largeur = models.IntegerField(blank=False,null=False)
    hauteur = models.IntegerField(blank=False,null=False)
    epaisseur = models.IntegerField(blank=True,null=True)
    # info = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return str(self.largeur)+"x"+str(self.hauteur)
    
class Article(models.Model):
    reference = models.CharField(max_length=50,blank=True,null=True)
    designation = models.CharField(max_length=100,blank=False,null=False)
    uniteDeMesure= models.CharField(max_length=50,choices=(('u','unite'),('m','metre lineaire'),('m2','metre carre'),('m3','metre cube'),('n/a','non-applicable')),default='m')
    uniteDeQuantification = models.CharField(max_length=50,choices=(('u','unite'),('m','metre lineaire'),('m2','metre carre'),('m3','metre cube'),('barre','barre 5,8m'),('n/a','non-applicable')),default='u')
    fabriquant = models.CharField(max_length=100,blank=True,null=True)
    info = models.CharField(max_length=200,blank=True,null=True)

    classe = models.ForeignKey(Classe,on_delete=models.CASCADE,blank=False,null=False)
    couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT,blank=False,null=False)
    dimension = models.ForeignKey(Dimension,on_delete=models.RESTRICT,blank=False,null=False)

    def __str__(self):
        return self.designation

# class Nomenclature(models.Model):
#     produitBrut = models.ForeignKey(Article,on_delete=models.CASCADE)
#     produitFini = models.ForeignKey(Article,on_delete=models.CASCADE,related_name='produitFini')
#     quantiteProduitBrut = models.FloatField(blank=False,null=False,default=0)

#     def __str__(self):
#         return self.produitFini.designation+"/ "+self.produitBrut.designation+"/ qte: "+str(self.quantiteProduitBrut)
    
# class CoutPrixMat(models.Model):
#     prixRevient = models.FloatField(blank=False,null=False,default=1000)
#     prixVente = models.FloatField(blank=False,null=False,default=1700)
#     date = models.DateField(blank=False,null=False,default=timezone.now())
#     info = models.CharField(max_length=200,blank=True,null=True)

#     materiel = models.ForeignKey(Materiel,on_delete=models.CASCADE,blank=True,null=True)

#     def __str__(self):
#         return self.materiel.designation+"/ "+str(self.prixRevient)+"/ "+str(self.date)

#Produit Fini
# class ClasseProd(models.Model):
#     classe = models.CharField(max_length=50,blank=False,null=False)
#     info = models.CharField(max_length=200,blank=True,null=True)

#     def __str__(self):
#         return self.classe

# class Produit(models.Model):
#     reference = models.CharField(max_length=50,blank=True,null=True)
#     designation = models.CharField(max_length=100,blank=True,null=True)
#     uniteDeMesure= models.CharField(max_length=50,choices=(('u','unite'),('m','metre lineaire'),('m2','metre carre'),('m3','metre cube'),('n/a','pas applicable')),default='m')
#     uniteDeQuantification = models.CharField(max_length=50,choices=(('u','unite'),('m','metre lineaire'),('m2','metre carre'),('m3','metre cube'),('barre','barre 5,8m'),('n/a','pas applicable')),default='u')
#     # cout = models.FloatField(blank=False,null=False,default=10000)
#     # prix = models.FloatField(blank=False,null=False,default=17000)
#     info = models.CharField(max_length=200,blank=True,null=True)

#     classe = models.ForeignKey(ClasseProd,on_delete=models.CASCADE,blank=True,null=True)
#     dimension = models.ForeignKey(Dimension,on_delete=models.RESTRICT,blank=True,null=True)
#     couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT,blank=True,null=True)
#     materiel = models.ManyToManyField(Materiel,through='Nomenclature')
    
#     def __str__(self):
#         return self.designation+"/ "+self.classe.classe+"/ "+str(self.dimension.largeur)+"x"+str(self.dimension.hauteur)+"/ "+self.couleur.couleur


    
# class Fournisseur(models.Model):
#     nom = models.CharField(max_length=50,blank=False,null=False)
#     adresse = models.CharField(max_length=100,blank=True,null=True)
#     email = models.EmailField(blank=True,null=True)
#     telephone = models.CharField(max_length=50,blank=True,null=True)
#     personneRelation = models.CharField(max_length=100,blank=True,null=True)
#     fournisseurFabriquant = models.BooleanField(default=False)

#     ville = models.ForeignKey(Ville,on_delete=models.RESTRICT,blank=True,null=True)
#     pays = models.ForeignKey(Pays,on_delete=models.RESTRICT,blank=True,null=True)

#     def __str__(self):
#         return self.nom
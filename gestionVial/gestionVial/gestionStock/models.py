from django.db import models
from django.utils import timezone

# Create your models here.
class Pays(models.Model):
    pays = models.CharField(max_length=50,blank=False,null=False)
    abbrev = models.CharField(max_length=3,blank=True,null=True) 

    def __str__(self):
        return self.pays

class Ville(models.Model):
    ville = models.CharField(max_length=50,blank=False,null=False)
    lat = models.FloatField(blank=True,null=True)  
    lon = models.FloatField(blank=True,null=True)

    pays = models.ForeignKey(Pays,on_delete=models.CASCADE)

    def __str__(self):
        return self.ville+" ("+self.pays.pays+")"

#Materiel brut
class ClasseMat(models.Model):
    classe = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.classe

class Couleur(models.Model):
    couleur = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)   

    def __str__(self):
        return self.couleur

class Fournisseur(models.Model):
    nom = models.CharField(max_length=50,blank=False,null=False)
    adresse = models.CharField(max_length=100,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    telephone = models.CharField(max_length=50,blank=True,null=True)
    personneRelation = models.CharField(max_length=100,blank=True,null=True)
    fournisseurFabriquant = models.BooleanField(default=False)

    ville = models.ForeignKey(Ville,on_delete=models.RESTRICT,blank=True,null=True)
    pays = models.ForeignKey(Pays,on_delete=models.RESTRICT,blank=True,null=True)

    def __str__(self):
        return self.nom

class Materiel(models.Model):
    reference = models.CharField(max_length=50,blank=True,null=True)
    designation = models.CharField(max_length=100,blank=True,null=True)
    uniteDeQuantification = models.CharField(max_length=50,choices=(('u','unite'),('m','metre lineaire'),('m2','metre carre'),('m3','metre cube'),('n/a','pas applicable')),default='m')
    cout = models.FloatField(blank=False,null=False,default=10000)
    # prix = models.FloatField(blank=False,null=False,default=17000)
    fabriquant = models.CharField(max_length=100,blank=True,null=True)
    info = models.CharField(max_length=200,blank=True,null=True)

    classe = models.ForeignKey(ClasseMat,on_delete=models.CASCADE,blank=True,null=True)
    couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT,blank=True,null=True)
    fournisseur = models.ForeignKey(Fournisseur,on_delete=models.RESTRICT,blank=True,null=True)

    def __str__(self):
        return self.designation+"/ "+self.classe.classe +"/ "+self.couleur.couleur

class CoutPrixMat(models.Model):
    prixRevient = models.FloatField(blank=False,null=False,default=1000)
    prixVente = models.FloatField(blank=False,null=False,default=1700)
    date = models.DateField(blank=False,null=False,default=timezone.now())
    info = models.CharField(max_length=200,blank=True,null=True)

    materiel = models.ForeignKey(Materiel,on_delete=models.CASCADE,blank=True,null=True)

    def __str__(self):
        return self.materiel.designation+"/ "+str(self.prixRevient)+"/ "+str(self.date)

#Produit Fini
class ClasseProd(models.Model):
    classe = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.classe

class Dimension(models.Model):
    largeur = models.IntegerField(blank=False,null=False,default=0)
    hauteur = models.IntegerField(blank=False,null=False,default=0)
    profondeur = models.IntegerField(blank=True,null=True)
    info = models.CharField(max_length=200,blank=True,null=True)


    def __str__(self):
        return str(self.largeur)+"x"+str(self.hauteur)

class Produit(models.Model):
    reference = models.CharField(max_length=50,blank=True,null=True)
    designation = models.CharField(max_length=100,blank=True,null=True)
    uniteDeQuantification = models.CharField(max_length=50,choices=(('u','unite'),('m','metre lineaire'),('m2','metre carre'),('m3','metre cube'),('n/a','pas applicable')),default='u')
    # cout = models.FloatField(blank=False,null=False,default=10000)
    # prix = models.FloatField(blank=False,null=False,default=17000)
    info = models.CharField(max_length=200,blank=True,null=True)

    classe = models.ForeignKey(ClasseProd,on_delete=models.CASCADE,blank=True,null=True)
    dimension = models.ForeignKey(Dimension,on_delete=models.RESTRICT,blank=True,null=True)
    couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT,blank=True,null=True)
    # materiel = models.ManyToManyField(Materiel,through='Nomenclature')
    
    def __str__(self):
        return self.designation+"/ "+self.classe.classe+"/ "+str(self.dimension.largeur)+"x"+str(self.dimension.hauteur)+"/ "+self.couleur.couleur

# class Nomenclature(models.Model):
#     materiel = models.ForeignKey(Materiel,on_delete=models.CASCADE)
#     produit = models.ForeignKey(Produit,on_delete=models.CASCADE)
#     quantiteMateriel = models.FloatField(blank=False,null=False,default=1)
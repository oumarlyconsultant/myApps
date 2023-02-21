from django.db import models

# Create your models here.
#Materiel brut
class ClasseMat(models.Model):
    classe = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.classe

class CategorieMat(models.Model):
    categorie = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)
    classe = models.ForeignKey(ClasseMat,on_delete=models.CASCADE,blank=True,null=True)

    def __str__(self):
        return self.classe+" "+self.categorie

class Couleur(models.Model):
    nom = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)   

    def __str__(self):
        return self.nom

class Fournisseur(models.Model):
    nom = models.CharField(max_length=50,blank=False,null=False)
    adresse = models.CharField(max_length=100,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    telephone = models.CharField(max_length=50,blank=True,null=True)
    pays = models.CharField(max_length=50,blank=True,null=True)
    personneRelation = models.CharField(max_length=100,blank=True,null=True)
    fournisseurFabriquant = models.BooleanField(default=False)

    def __str__(self):
        return self.nom

class Materiel(models.Model):
    reference = models.CharField(max_length=50,blank=True,null=True)
    designation = models.CharField(max_length=100,blank=True,null=True)
    uniteDeMesure = models.CharField(max_length=50,choices=(('m','metre'),('m2','mettre carre'),('m3','mettre cube'),('n/a','pas applicable')),default='m')
    uniteDeQuantification = models.CharField(max_length=50,choices=(('u','unite'),('m','metre'),('m2','mettre carre'),('m3','mettre cube'),('n/a','pas applicable')),default='u')
    cout = models.FloatField(blank=False,null=False,default=10000)
    prix = models.FloatField(blank=False,null=False,default=17000)
    fabriquant = models.CharField(max_length=100,blank=True,null=True)
    info = models.CharField(max_length=200,blank=True,null=True)

    characteristiques = models.ForeignKey(CategorieMat,on_delete=models.CASCADE,blank=True,null=True)
    couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT,blank=True,null=True)
    fournisseur = models.ForeignKey(Fournisseur,on_delete=models.RESTRICT,blank=True,null=True)

    def __str__(self):
        return self.designation+" "+self.characteristiques+" "+self.couleur

#Produit Fini
class ClasseProd(models.Model):
    classe = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.classe

class CategorieProd(models.Model):
    categorie = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)
    classe = models.ForeignKey(ClasseProd,on_delete=models.CASCADE,blank=True,null=True)

    def __str__(self):
        return self.classe+" "+self.categorie

class Dimension(models.Model):
    largeur = models.IntegerField(blank=False,null=False,default=0)
    hauteur = models.IntegerField(blank=False,null=False,default=0)
    profondeur = models.IntegerField(blank=True,null=True)

    def __str__(self):
        return str(self.largeur)+"x"+str(self.hauteur)

class Produit(models.Model):
    reference = models.CharField(max_length=50,blank=True,null=True)
    designation = models.CharField(max_length=100,blank=True,null=True)
    uniteDeMesure = models.CharField(max_length=50,choices=(('m','metre'),('m2','mettre carre'),('m3','mettre cube'),('n/a','pas applicable')),default='m')
    uniteDeQuantification = models.CharField(max_length=50,choices=(('u','unite'),('m','metre'),('m2','mettre carre'),('m3','mettre cube'),('n/a','pas applicable')),default='u')
    cout = models.FloatField(blank=False,null=False,default=10000)
    prix = models.FloatField(blank=False,null=False,default=17000)
    info = models.CharField(max_length=200,blank=True,null=True)

    characteristiques = models.ForeignKey(CategorieProd,on_delete=models.CASCADE,blank=True,null=True)
    dimension = models.ForeignKey(Dimension,on_delete=models.RESTRICT,blank=True,null=True)
    couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT,blank=True,null=True)
    materiel = models.ManyToManyField(Materiel,through='Nomenclature')
    
    def __str__(self):
        return self.designation+" "+self.characteristiques+" "+self.dimension+" "+self.couleur

class Nomenclature(models.Model):
    materiel = models.ForeignKey(Materiel,on_delete=models.CASCADE)
    produit = models.ForeignKey(Produit,on_delete=models.CASCADE)
    quantiteMateriel = models.FloatField(blank=False,null=False,default=1)
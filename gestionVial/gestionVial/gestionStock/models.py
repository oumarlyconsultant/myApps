from django.db import models

# Create your models here.
#Materiel brut
class CharacMat(models.Model):
    classe = models.CharField(max_length=50,blank=False,null=False)
    categorie = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)

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
    fournisseurFabriquant = models.CharField(max_length=1,choices=(('N','Non'),('O','Oui')),default='N')

    def __str__(self):
        return self.nom

class Materiel(models.Model):
    reference = models.CharField(max_length=50,blank=True,null=True)
    designation = models.CharField(max_length=100,blank=False,null=False)
    uniteDeMesure = models.CharField(max_length=50)
    uniteDeQuantification = models.CharField(max_length=50,blank=True,null=True)
    cout = models.FloatField(blank=False,null=False,default=10000)
    prix = models.FloatField(blank=False,null=False,default=17000)
    fabriquant = models.CharField(max_length=100,blank=True,null=True)
    autresInfo = models.CharField(max_length=200,blank=True,null=True)

    characteristiques = models.ForeignKey(CharacMat,on_delete=models.RESTRICT)
    couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT)
    fournisseur = models.ForeignKey(Fournisseur,on_delete=models.RESTRICT,blank=True,null=True)

    def __str__(self):
        return self.designation

#Produit Fini
class CharacProd(models.Model):
    classe = models.CharField(max_length=50,blank=False,null=False)
    categorie = models.CharField(max_length=50,blank=False,null=False)
    info = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.classe+" "+self.categorie

class Dimension(models.Model):
    largeur = models.IntegerField(blank=True,null=True)
    hauteur = models.IntegerField(blank=True,null=True)
    profondeur = models.IntegerField(blank=True,null=True)

    def __str__(self):
        return str(self.largeur)+"x"+str(self.hauteur)

class Produit(models.Model):
    reference = models.CharField(max_length=50,blank=True,null=True)
    # designation = models.CharField(max_length=100,blank=False,null=False)
    uniteDeMesure = models.CharField(max_length=50,blank=True,null=True)
    uniteDeQuantification = models.CharField(max_length=50,blank=True,null=True)
    cout = models.FloatField(blank=False,null=False,default=10000)
    prix = models.FloatField(blank=False,null=False,default=17000)
    autresInfo = models.CharField(max_length=200,blank=True,null=True)

    characteristiques = models.ForeignKey(CharacProd,on_delete=models.RESTRICT)
    dimension = models.ForeignKey(Dimension,on_delete=models.RESTRICT,blank=True,null=True)
    couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT,blank=True,null=True)
    materiel = models.ManyToManyField(Materiel,through='Nomenclature')
    
    def __str__(self):
        return self.characteristiques.classe+" "+self.characteristiques.categorie+" "+self.dimension+" "+self.reference

class Nomenclature(models.Model):
    materiel = models.ForeignKey(Materiel,on_delete=models.RESTRICT)
    produit = models.ForeignKey(Produit,on_delete=models.RESTRICT)
    quantiteMateriel = models.FloatField(blank=False,null=False,default=1)
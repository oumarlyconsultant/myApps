from django.db import models
from django.utils import timezone
from django.urls import reverse
import uuid

####################### Commun

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
        return self.ville

####################### Personnel

class Departement(models.Model):
    nom = models.CharField(max_length=100,blank=False,null=False)
    departementParent = models.ForeignKey('self',null=True,blank=True,on_delete=models.RESTRICT)

    def __str__(self):
        return self.nom
    
class Poste(models.Model):    
    nom = models.CharField(max_length=100,blank=False,null=False)
    niveau = models.IntegerField()

    def __str__(self):
        return self.nom

class Employe(models.Model):
    # administrateur = models.ForeignKey('auth.User',on_delete=models.CASCADE)   
    numeroEmploye = models.UUIDField(default=uuid.uuid4,editable=False)
    prenom = models.CharField(max_length=50)
    nom = models.CharField(max_length=50)
    dateNaissance = models.DateField(default='1991-01-01')
    sexe = models.CharField(max_length=1,choices=(('H','HOMME'),('F','FEMME')),default='H')
    adresseDomicile = models.CharField(max_length=100,default="Bamako")
    telephone = models.CharField(max_length=50,blank=False,null=False)
    telephone2 = models.CharField(max_length=50,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
 
    ville = models.ForeignKey(Ville,on_delete=models.RESTRICT,default=1)
    pays = models.ForeignKey(Pays,on_delete=models.RESTRICT,default=1)
    
    poste = models.ForeignKey(Poste,on_delete=models.RESTRICT,blank=False,null=False,default=1)
    departement = models.ForeignKey(Departement,on_delete=models.RESTRICT,blank=False,null=False,default=1)
    responsable = models.ForeignKey('self',blank=True,null=True,on_delete=models.RESTRICT)

    # def get_absolute_url(self): #go back to this post
        # return reverse("gestionPersonnel:details",kwargs={'pk':self.numeroEmploye})
        # return reverse("gestionPersonnel:details",kwargs={'pk':self.numeroEmploye})

    def __str__(self):
        return (self.prenom+" "+self.nom)

class TermesEmploi(models.Model):    
    employe = models.OneToOneField(Employe,on_delete=models.CASCADE,primary_key=True,default=999)
    dateEmbauche = models.DateField(blank=False,null=False,default='1991-01-01')
    dateFinEmploi = models.DateField(blank=False,null=False,default='9999-12-31')
    raisonFinEmploi = models.CharField(max_length=3,blank=False,null=False,choices=(('R','Retraite'),('V','Fin volontaire'),('I','Fin involontaire'),('C','Fin contrat'),('n/a','non-applicable')),default='n/a')
    raisonFinDetails = models.TextField(max_length=200,blank=False,null=False,default='n/a')
    typeEmploi = models.CharField(max_length=1,blank=False,null=False,choices=(('P','Permanent'),('C','Contractuel')),default='P')
    salaire = models.FloatField(default=25000)
    bonus = models.FloatField(default=0)
    dateMisAJour = models.DateTimeField('Date de mis-a-jour',auto_now=True)

    def __str__(self):
        return (self.employe.prenom+" "+self.employe.nom)+" "+str(self.dateEmbauche)+" "+str(self.dateFinEmploi)+" "+str(self.salaire)

####################### Inventaires_et_stock

class Classe(models.Model):
    classe = models.CharField(max_length=50,blank=False,null=False)
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
    volume = models.IntegerField(blank=True,null=True)
    # info = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return str(self.largeur)+"x"+str(self.hauteur)
    
class Article(models.Model):
    reference = models.CharField(max_length=50,blank=True,null=True)
    designation = models.CharField(max_length=100,blank=False,null=False)
    uniteDeMesure= models.CharField(max_length=50,choices=(('u','unite'),('m','metre lineaire'),('m2','metre carre'),('m3','metre cube'),('n/a','non-applicable')),default='m')
    uniteDeQuantification = models.CharField(max_length=50,choices=(('u','unite'),('m','metre lineaire'),('m2','metre carre'),('m3','metre cube'),('barre','barre 5,8m'),('n/a','non-applicable')),default='u')
    prixDeRevient = models.FloatField(blank=True,null=True)
    prixDeVente = models.FloatField(blank=True,null=True)
    fabriquant = models.CharField(max_length=100,blank=True,null=True)
    indArticleFab = models.BooleanField(blank=False,null=False,default=False)
    info = models.CharField(max_length=200,blank=True,null=True)

    classe = models.ForeignKey(Classe,on_delete=models.CASCADE,blank=False,null=False)
    couleur = models.ForeignKey(Couleur,on_delete=models.RESTRICT,blank=False,null=False)
    dimension = models.ForeignKey(Dimension,on_delete=models.RESTRICT,blank=False,null=False)
    articleFabrique = models.ManyToManyField('self',through='Nomenclature',symmetrical=False,blank=True,null=True)

    def __str__(self):
        return self.designation

class Nomenclature(models.Model):
    produitFini = models.ForeignKey(Article,on_delete=models.CASCADE,related_name='produitFini')
    produitBrut = models.ForeignKey(Article,on_delete=models.CASCADE,related_name='produitBrut')    
    qtiteArticleBrutReq = models.IntegerField(default=0)

    def __str__(self):
        return self.produitFini.designation+"/ "+self.produitBrut.designation+"/ qte: "+str(self.qtiteProduitBrut)


####################### Ventes

class Client(models.Model):
    prenom = models.CharField(max_length=50,blank=False,null=False,verbose_name="Prenom")
    nom = models.CharField(max_length=50,blank=False,null=False,verbose_name="Nom")
    nomEntreprise = models.CharField(max_length=50,blank=True,null=True,verbose_name="Nom de l'entreprise")
    adresse = models.CharField(max_length=100,blank=True,null=True,verbose_name="Adresse")
    telephone = models.CharField(max_length=50,blank=True,null=True,verbose_name="Telephone")
    email = models.EmailField(blank=True,null=True,verbose_name="Email")
    info = models.CharField(max_length=200,blank=True,null=True,verbose_name="Autres infos")

    ville = models.ForeignKey(Ville,on_delete=models.RESTRICT,blank=True,null=True,default=1)
    pays = models.ForeignKey(Pays,on_delete=models.RESTRICT,blank=True,null=True,default=1)

    def get_absolute_url(self): #go back to this post
        # return reverse("gestionPersonnel:details",kwargs={'pk':self.numeroEmploye})
        return reverse("ventes:clientsDetails",kwargs={'pk':self.id})

    def __str__(self):
        return self.prenom+" "+self.nom+" "+self.nomEntreprise

class Devis(models.Model):
    date = models.DateField(default=timezone.now(),verbose_name="Date")
    remise = models.FloatField(blank=True,null=True,default=0,verbose_name="Remise %")

    client = models.ForeignKey(Client,default=999,on_delete=models.RESTRICT,verbose_name="Nom du client")
    responsable = models.ForeignKey(Employe,default=999,on_delete=models.RESTRICT,related_name='responsableTravail',verbose_name="Nom du resp.")
    agentCommercial = models.ForeignKey(Employe,default=999,on_delete=models.RESTRICT,related_name='createurDevis',verbose_name="Nom de l'agent comm.")
    article = models.ManyToManyField(Article,through='DevisArticle',verbose_name="Article")

class DevisArticle(models.Model):
    quantite = models.FloatField(default=0,verbose_name="Quantite")
    devis = models.ForeignKey(Devis,on_delete=models.CASCADE,default=999,verbose_name="Numero du devis")
    article = models.ForeignKey(Article,on_delete=models.CASCADE,default=999,verbose_name="Article")

    




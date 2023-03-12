# Generated by Django 4.1.7 on 2023-03-12 18:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("gestionStock", "0014_alter_coutprixmat_date"),
    ]

    operations = [
        migrations.CreateModel(
            name="Nomenclature",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("quantiteMateriel", models.FloatField(default=1)),
            ],
        ),
        migrations.AddField(
            model_name="materiel",
            name="uniteDeMesure",
            field=models.CharField(
                choices=[
                    ("u", "unite"),
                    ("m", "metre lineaire"),
                    ("m2", "metre carre"),
                    ("m3", "metre cube"),
                    ("n/a", "pas applicable"),
                ],
                default="m",
                max_length=50,
            ),
        ),
        migrations.AlterField(
            model_name="materiel",
            name="uniteDeQuantification",
            field=models.CharField(
                choices=[
                    ("u", "unite"),
                    ("m", "metre lineaire"),
                    ("m2", "metre carre"),
                    ("m3", "metre cube"),
                    ("barre", "barre 5,8m"),
                    ("n/a", "pas applicable"),
                ],
                default="barre",
                max_length=50,
            ),
        ),
        migrations.DeleteModel(name="CoutPrixMat",),
        migrations.AddField(
            model_name="nomenclature",
            name="materiel",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="gestionStock.materiel"
            ),
        ),
        migrations.AddField(
            model_name="nomenclature",
            name="produit",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="gestionStock.produit"
            ),
        ),
        migrations.AddField(
            model_name="produit",
            name="materiel",
            field=models.ManyToManyField(
                through="gestionStock.Nomenclature", to="gestionStock.materiel"
            ),
        ),
    ]

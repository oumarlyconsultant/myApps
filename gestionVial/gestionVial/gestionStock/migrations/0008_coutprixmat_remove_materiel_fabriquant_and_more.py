# Generated by Django 4.1.7 on 2023-03-12 03:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gestionStock", "0007_remove_categorieprod_classe_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="CoutPrixMat",
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
                ("prixRevient", models.FloatField(default=1000)),
                ("prixVente", models.FloatField(default=1700)),
                (
                    "date",
                    models.DateField(
                        default=datetime.datetime(
                            2023, 3, 12, 3, 2, 42, 433066, tzinfo=datetime.timezone.utc
                        )
                    ),
                ),
                ("info", models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.RemoveField(model_name="materiel", name="fabriquant",),
        migrations.RemoveField(model_name="materiel", name="prix",),
        migrations.RemoveField(model_name="produit", name="cout",),
        migrations.RemoveField(model_name="produit", name="prix",),
    ]

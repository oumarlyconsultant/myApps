# Generated by Django 4.1 on 2023-02-12 03:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gestionPersonnel", "0013_termemploi_type_termpaie_raisonpaie_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="employe",
            name="dateAjout",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 2, 12, 3, 33, 39, 946160, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]
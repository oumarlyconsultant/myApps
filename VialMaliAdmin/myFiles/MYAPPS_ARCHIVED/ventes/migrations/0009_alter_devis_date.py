# Generated by Django 4.1.7 on 2023-04-08 22:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("ventes", "0008_alter_devis_date"),
    ]

    operations = [
        migrations.AlterField(
            model_name="devis",
            name="date",
            field=models.DateField(
                default=datetime.datetime(
                    2023, 4, 8, 22, 45, 40, 945708, tzinfo=datetime.timezone.utc
                ),
                verbose_name="Date",
            ),
        ),
    ]

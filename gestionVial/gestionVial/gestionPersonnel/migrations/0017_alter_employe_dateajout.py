# Generated by Django 4.1.6 on 2023-02-19 19:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestionPersonnel', '0016_alter_employe_dateajout'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employe',
            name='dateAjout',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 19, 19, 18, 34, 646879, tzinfo=datetime.timezone.utc)),
        ),
    ]
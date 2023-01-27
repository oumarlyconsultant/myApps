from django.db import models
from django.utils import timezone
from django.core.urlresolvers import reverse

# Create the post model
class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now())
    published_date = models.DateTimeField(blank=True,null=True)

    def pushish(self):
        self.published_date = timezone.now()
        self.save()

    def approve_comment(self):
        return self.comments.filter(approved_comment=True)

    def get_absolute_url(self): #go back to this post
        return reverse("post_detail",kwargs={'pk':self.pk})

    def __str__(self):
        return self.title

#create the comment model - comment has a 1:m relationship with post - comment need to match 1 and only 1 post, post may not have a comment
class Comment(models.Model):
    post = models.ForeignKey('blog.Post',related_name='comments')
    author = models.CharField(max_length=50)
    text = models.TextField(blank=False,null=False)
    created_date = models.DateTimeField(default=timezone.now())
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def get_absolute_url(self):
        return reverse('post_list')

    def __str__(self):
        return self.text
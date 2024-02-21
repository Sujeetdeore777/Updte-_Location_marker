from django.urls import path, include
from rest_framework import routers
from .views import LocationViewSet

router = routers.DefaultRouter()
router.register(r'location', LocationViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]
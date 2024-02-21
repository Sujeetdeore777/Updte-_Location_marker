from django.db import models
# from django.contrib.gis.db import models


from django.contrib.gis.db import models
# from drf_extra_fields.geo_fields import PointField

class Marker(models.Model):
    name = models.CharField(max_length=100)
    geometry = models.PointField()


from django.shortcuts import render
from bs4 import BeautifulSoup
import re

def my_view(request):
    # Assume you have some HTML content in the 'html_content' variable
    html_content = "<html><body><script>function dl() { return 'download'; }</script></body></html>"
    
    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the script tag
    script_tag = soup.find("script")
    
    # Check if the script tag exists
    if script_tag:
        # Extract the string inside the script tag
        script_string = script_tag.string
        
        # Check if a string exists inside the script tag
        if script_string:
            # Use regular expression to search for the pattern
            dl_function_match = re.search(r"function dl.*\}", script_string)
            
            # Check if the pattern is found
            if dl_function_match:
                # If found, extract the matched portion
                dl_function = dl_function_match.group(0)
                # Now you can work with dl_function
                
                # For demonstration purposes, render a template with dl_function
                return render(request, 'my_template.html', {'dl_function': dl_function})
            else:
                # Handle case where pattern is not found
                print("Pattern not found in script string")
        else:
            # Handle case where no string is found inside script tag
            print("No string found inside script tag")
    else:
        # Handle case where script tag is not found in the HTML
        print("Script tag not found in the HTML")
    
    # Handle other cases where data extraction fails or return an appropriate response
    return render(request, 'error_template.html')

# Use the official Nginx base image
FROM nginx

# Copy the contents of your website to the Nginx document root
COPY . /usr/share/nginx/html

# Expose port 80 to allow incoming traffic
EXPOSE 80
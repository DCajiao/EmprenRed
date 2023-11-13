# Eliminar todos los registros
docker rm solicitud db_solicitud micronegocio db_micronegocio experto db_experto
docker rmi recursosmicrosmysql-solicitud recursosmicrosmysql-micronegocio recursosmicrosmysql-experto
# Ejecutar docker
docker-compose up
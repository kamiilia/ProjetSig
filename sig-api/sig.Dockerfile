FROM maven:3.6-jdk-11
COPY . /opt/sig-api/
WORKDIR /opt/sig-api/
RUN mvn package -Dmaven.test.skip=true
WORKDIR target/

CMD java -jar sig.jar


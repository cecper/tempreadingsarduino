import serial
import psycopg2

ser = serial.Serial('COM3', 9600, timeout=1)

class serialtoDatabase:
    def connect(self):
        try:
            self.conn = psycopg2.connect("dbname=arduino user=postgres password=postgres")
            

        except (Exception, psycopg2.DatabaseError) as error:
            print(error)

    def read_serial(self):
        while True:
            raw = ser.readline()
            decoded = raw.decode().strip()
            lines = decoded.split(';')

            if decoded != '':
                datetime=lines[0]
                temperature=lines[1]
                humidity=lines[2]

                date=datetime.split(' ')[1]
                time=datetime.split(' ')[0]
                
                cur = self.conn.cursor()
                query = "INSERT INTO roomcondition.temphum_readings (temperature, humidity, date, time) VALUES (%s, %s, %s, %s)"
                values = (temperature,humidity,date, time)
                cur.execute(query, values)
                self.conn.commit()

                """ print('Date: ' + date)
                print('Time: ' + time)
                print('Temperature: ' + temperature)
                print('Humidity: ' + humidity) """

if __name__ == '__main__':
    serialtoDatabase.connect(self=serialtoDatabase)
    serialtoDatabase.read_serial(self=serialtoDatabase)

from scapy.all import *
import struct
import time

def pcap_to_dat(pcap_file, dat_file, max_packets=20000000):  # Default 2M packets
    packet_count = 0
    sniff_reader = PcapReader(pcap_file)
    
    with open(dat_file, 'wb') as f:
        for packet in sniff_reader:
            if packet_count >= max_packets:
                break
                
            if IP in packet and (TCP in packet or UDP in packet):
                ip_src_bytes = bytes(map(int, packet[IP].src.split('.')))
                ip_dst_bytes = bytes(map(int, packet[IP].dst.split('.')))
                proto = packet[IP].proto
                sport = packet[TCP].sport if TCP in packet else packet[UDP].sport
                dport = packet[TCP].dport if TCP in packet else packet[UDP].dport
                
                flow_id = struct.pack('!4s4sBHH',
                    ip_src_bytes,
                    ip_dst_bytes,
                    proto,
                    sport,
                    dport
                )
                
                timestamp = int(time.time())
                extra = struct.pack('!Q', timestamp)
                
                f.write(flow_id)
                f.write(extra)
                packet_count += 1
            
        sniff_reader.close()

if __name__ == "__main__":
    pcap_to_dat("./tools/equinix-nyc.dirA.20180517-134300.UTC.anon.pcap", 
                "equinix-nyc.dirA.20180517.dat",
                max_packets=20000000)  # Adjust this number as needed
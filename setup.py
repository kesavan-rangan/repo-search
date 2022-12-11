import subprocess
import sys
import os
import time
import signal
wait_till_browser_launches = 5

import argparse
 
parser = argparse.ArgumentParser()
parser.add_argument("-t", "--test_type", default='full_regression')
args = parser.parse_args()
print(args.test_type)

npm_install = subprocess.call(["npm", "install"])


npm_start = subprocess.Popen("npm start", shell=True,stdout=subprocess.PIPE)
for line in iter(npm_start.stdout.readline, b''):
    # print("i am here")
    # h = sys.stdout.write(c.decode(sys.stdout.encoding))
    curr_line = line.decode(sys.stdout.encoding)
    "webpack 5.70.0 compiled successfully"
    if 'webpack' in curr_line and 'compiled successfully' in curr_line:
        time.sleep(wait_till_browser_launches)
        break

# print("i am backk ") 

python_auto = subprocess.call(["python3", "repo_search_automation/scripts/test_suites/repo_search.py", "-t", str(args.test_type) ])


os.killpg(os.getpgid(npm_start.pid), signal.SIGTERM)  # Send the signal to all the process groups

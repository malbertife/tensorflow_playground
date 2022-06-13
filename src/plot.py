from matplotlib import pyplot as plt
import sys

points = []

_, name = sys.argv

with open(name) as f:
    for line in f:
        xs, ys, labels = line.split()
        x = float(xs)
        y = float(ys)
        label = int(labels)
        points.append((x, y, label))

plt.rcParams["figure.figsize"] = [7.00, 3.50]
plt.rcParams["figure.autolayout"] = True
plt.xlim(-5, 5)
plt.ylim(-5, 5)
plt.grid()
for x, y, label in points:
    plt.plot([x], [y], marker="o", markersize=1, markeredgecolor="blue" if label ==
             1 else "red", markerfacecolor="blue" if label == 1 else "red")
plt.show()

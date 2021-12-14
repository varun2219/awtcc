from scipy import signal
import numpy as np
import frfft
import matplotlib.pyplot as plt
t = np.linspace(0, 130, 500, endpoint=False)
sq_sig=(1+signal.square(t/20-np.pi/2))/2

X=frfft.FrFFT(sq_sig, 0.4)
plt.plot(t,X.result.imag)
plt.show()
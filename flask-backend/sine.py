import frfft
import numpy as np

def frftsine(alpha):
    # t=np.arange(0,130,1)
    # x=np.sin(2*np.pi*t*130)
    time = np.arange(0, 10*(np.pi), 0.1)
    sin_signal = np.sin(time/5)

    # X=frfft.FrFFT(x,0.5)
    X=frfft.FrFFT(sin_signal, alpha)
    return X


def ftsine():
    time = np.arange(0, 10*(np.pi), 0.1)
    sin_signal = np.sin(time/5)

    ft=np.fft.fft(sin_signal)
    return ft

def ogsine():
    time = np.arange(0, 10*(np.pi), 0.1)
    sin_signal = np.sin(time/5)
    return sin_signal

def tsine():
    time = np.arange(0, 10*(np.pi), 0.1)
    return time
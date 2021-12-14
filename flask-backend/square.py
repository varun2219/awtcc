from scipy import signal
import numpy as np
import frfft


def frftsquare(alpha):
    t = np.linspace(0, 130, 500, endpoint=False)
    sq_sig=(1+signal.square(t/20-np.pi/2))/2
    
    X=frfft.FrFFT(sq_sig, alpha)
    return X

def ftsquare():
    t = np.linspace(0, 130, 500, endpoint=False)
    sq_sig=(1+signal.square(t/20-np.pi/2))/2

    ft=np.fft.fft(sq_sig)
    return ft

def ogsquare():
    t = np.linspace(0, 130, 500, endpoint=False)
    sq_sig=(1+signal.square(t/20-np.pi/2))/2
    return sq_sig

def tsquare():
    t = np.linspace(0, 130, 500, endpoint=False)
    return t
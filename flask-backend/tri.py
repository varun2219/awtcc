from scipy import signal
import numpy as np
import frfft

def frfttri(alpha):
    t = np.linspace(0, 130, 500)
    tri_sig= (1+signal.sawtooth( t/20,0.5))/2
    
    X=frfft.FrFFT(tri_sig, alpha)
    return X

def fttri():
    t = np.linspace(0, 130, 500)
    tri_sig= (1+signal.sawtooth( t/20,0.5))/2

    ft=np.fft.fft(tri_sig)
    return ft

def ogtri():
    t = np.linspace(0, 130, 500)
    tri_sig= (1+signal.sawtooth( t/20,0.5))/2   
    return tri_sig

def ttri():
    t = np.linspace(0, 130, 500)
    return t

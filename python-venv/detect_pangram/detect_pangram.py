def detect_pangram(string):
    alpha = "a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z".split('.')

    for i in range(len(alpha)):
        if alpha[i] not in string.lower():
            return False

    return True

#https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python